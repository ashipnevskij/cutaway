import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { data } from './data.js';

const connectionString = process.env.DATABASE_URL;
const ssl = connectionString?.includes('sslmode=')
  ? { rejectUnauthorized: false }
  : undefined;

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString, ssl }),
});

async function main() {
  await prisma.profile.deleteMany();

  const profile = await prisma.profile.create({
    data: {
      name: data.name,
      title: data.title ?? data.position,
      description: data.description ?? data.position,
      githubUrl: data.githubUrl || null,
      linkedinUrl: data.linkedinUrl || null,
      email: data.email || null,
      skills: {
        create: data.skills.map((skill) => ({
          name: skill.name,
          category: skill.category ?? null,
        })),
      },
      experiences: {
        create: data.experience.map((exp) => ({
          company: exp.company,
          position: exp.position,
          startDate: new Date(exp.startDate),
          endDate: exp.endDate ? new Date(exp.endDate) : null,
          description: exp.technologies?.length
            ? `${exp.description ?? ''}\nСтек: ${exp.technologies.join(', ')}`
            : (exp.description ?? null),
        })),
      },
      projects: {
        create: data.projects.map((project) => ({
          name: project.name,
          description: project.stack?.length
            ? `${project.description ?? ''}\nСтек: ${project.stack.join(', ')}`
            : (project.description ?? null),
          repoUrl: project.repoUrl ?? project.link ?? null,
          demoUrl: project.demoUrl ?? null,
        })),
      },
    },
  });

  console.log('Профиль создан:', profile.id, profile.name);
  console.log(
    `Навыков: ${data.skills.length}, Опыта: ${data.experience.length}, Проектов: ${data.projects.length}`,
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
