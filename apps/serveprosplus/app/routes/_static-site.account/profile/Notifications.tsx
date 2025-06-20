import { NotificationSettings } from "./NotificationSettings";

export default function Notifications() {
  const { title, description, data } = {
    title: "Configure notifications",
    description: "Choose what notifications you want to receive",
    data: [
      {
        title: "Messages",
        description: "Direct messages you have received from other users",
      },
      {
        title: "Review requests",
        description: "Code review requests from your team members",
      },
      {
        title: "Comments",
        description: "Daily digest with comments on your posts",
      },
      {
        title: "Recommendations",
        description: "Digest with best community posts from previous week",
      },
    ],
  };

  return <NotificationSettings title={title} description={description} data={data} />;
}
