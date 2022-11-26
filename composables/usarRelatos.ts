import relatosBiblicos from "./relatosBiblicos";

// usando types del lenguage TypeScript

type Lesson = {
    title: string;
    slug: string;
    number: number;
    downloadUrl: string;
    videoId: number;
    text: string;
    sourceUrl?: string;
    path: string;
}
type Chapter = {
    title: string;
    slug: string;
    number: number;
    lessons: Lesson[];
  };
  
  type Course = {
    title: string;
    chapters: Chapter[];
  };

  export const useCourse = (): Course => {
    const chapters: Chapter[] = relatosBiblicos.chapters.map(
      (chapter) => {
      const lessons: Lesson[] = chapter.lessons.map(
        (lesson) => ({
        ...lesson,
        path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
      }));
      return {
        ...chapter,
        lessons,
      };
    });
    return {
      ...relatosBiblicos,
      chapters,
    };
  }; 