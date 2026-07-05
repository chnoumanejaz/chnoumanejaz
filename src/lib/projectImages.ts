import projectAiStudio from "@/assets/project-ai-studio.jpg";
import projectCloudsync from "@/assets/project-cloudsync.jpg";
import projectDevflow from "@/assets/project-devflow.jpg";
import projectEcotrack from "@/assets/project-ecotrack.jpg";

const projectCoverImages: Record<string, string> = {
  "project-ai-studio": projectAiStudio,
  "project-cloudsync": projectCloudsync,
  "project-devflow": projectDevflow,
  "project-ecotrack": projectEcotrack,
};

export function getProjectCoverImage(coverImage: string) {
  return projectCoverImages[coverImage] || "";
}
