import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "بدون عنوان",
    description: "توضیحی ثبت نشده است",
  },
  direction: "rtl" as const,
  components: {
    callout: {
      note: "یادداشت",
      abstract: "خلاصه",
      info: "اطلاعات",
      todo: "کار",
      tip: "نکته",
      success: "موفقیت",
      question: "پرسش",
      warning: "هشدار",
      failure: "ناموفق",
      danger: "خطر",
      bug: "اشکال",
      example: "نمونه",
      quote: "نقل‌قول",
    },
    backlinks: {
      title: "پیوندهای بازگشتی",
      noBacklinksFound: "پیوند بازگشتی یافت نشد",
    },
    themeToggle: {
      lightMode: "پوسته روشن",
      darkMode: "پوسته تاریک",
    },
    readerMode: {
      title: "حالت مطالعه",
    },
    explorer: {
      title: "فهرست مطالب",
    },
    footer: {
      createdWith: "ساخته‌شده با",
    },
    graph: {
      title: "نقشه مطالب",
    },
    recentNotes: {
      title: "یادداشت‌های تازه",
      seeRemainingMore: ({ remaining }) => `مشاهدهٔ ${remaining} مورد دیگر ←`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `گنجانده‌شده از ${targetSlug}`,
      linkToOriginal: "مشاهدهٔ متن اصلی",
    },
    search: {
      title: "جستجو",
      searchBarPlaceholder: "در مطالب جستجو کنید…",
    },
    tableOfContents: {
      title: "فهرست عناوین",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `حدود ${minutes} دقیقه مطالعه`,
    },
  },
  pages: {
    rss: {
      recentNotes: "یادداشت‌های تازه",
      lastFewNotes: ({ count }) => `${count} یادداشت اخیر`,
    },
    error: {
      title: "صفحه یافت نشد",
      notFound: "این صفحه وجود ندارد یا در دسترس نیست.",
      home: "بازگشت به صفحهٔ اصلی",
    },
    folderContent: {
      folder: "پوشه",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "۱ مطلب در این پوشه" : `${count} مطلب در این پوشه`,
    },
    tagContent: {
      tag: "برچسب",
      tagIndex: "فهرست برچسب‌ها",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "۱ مطلب با این برچسب" : `${count} مطلب با این برچسب`,
      showingFirst: ({ count }) => `نمایش ${count} برچسب اول`,
      totalTags: ({ count }) => `${count} برچسب`,
    },
  },
} as const satisfies Translation
