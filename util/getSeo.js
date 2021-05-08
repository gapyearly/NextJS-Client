export default function getFullName(settings) {
  return {
    title: settings.title,
    description: settings.description,
    openGraph: {
      url: "https://www.gapyearly.com",
      title: settings.title,
      description: settings.description,
      images: [{ url: "/images/gapyearly-avatar.png" }],
      site_name: "gapyearly",
    },
  };
}
