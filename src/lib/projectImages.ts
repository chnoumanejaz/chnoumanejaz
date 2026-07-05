const projectCoverImages: Record<string, string> = {
  "project-gripo": "/projects/gripo.png",
  "project-gripo-1": "/projects/gripo1.png",
  "project-gripo-2": "/projects/gripo2.png",
  "project-kolber": "/projects/kolber.png",
  "project-kolber-1": "/projects/kolber1.png",
  "project-kolber-2": "/projects/kolber2.png",
  "project-kolber-3": "/projects/kolber3.png",
  "project-topleft": "/projects/topleft.png",
  "project-topleft-1": "/projects/topleft1.png",
  "project-topleft-2": "/projects/topleft2.png",
  "project-topleft-3": "/projects/topleft3.png",
  "project-tramper": "/projects/tramper.png",
  "project-tramper-1": "/projects/tramper1.png",
  "project-tramper-2": "/projects/tramper2.png",
  "project-tramper-3": "/projects/tramper3.png",
};

export function getProjectCoverImage(coverImage: string) {
  return projectCoverImages[coverImage] || "";
}
