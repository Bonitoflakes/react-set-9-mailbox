export const fakefetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/allemails") {
        resolve({
          status: 200,
          message: "success",
          data: {
            emails: [
              {
                id: 1,
                sender: "john doe",
                subject: "hello!",
                message: "how are you?",
                read: false,
              },
              {
                id: 2,
                sender: "jane smith",
                subject: "meeting",
                message: "reminder of our meeting tomorrow at 2pm.",
                read: true,
              },
              {
                id: 3,
                sender: "bob johnson",
                subject: "proposal",
                message: "thanks for your proposal. we'll get back to you soon.",
                read: false,
              },
              {
                id: 4,
                sender: "juana",
                subject: "follow up on previous email",
                message: "just checking if you got time to go through my proposal.",
                read: true,
              },
            ],
            sentemails: [
              {
                id: 5,
                to: "john doe",
                subject: "re: hello!",
                message: "i am good.",
              },
              {
                id: 6,
                to: "jane smith",
                subject: "re: meeting",
                message: "thanks for the reminder. i'll be there.",
              },
              {
                id: 7,
                to: "bob johnson",
                subject: "re: proposal",
                message: "we are still discussing in the proposal you sent.",
              },
              {
                id: 8,
                to: "juana",
                subject: "re: follow up on previous email",
                message: "we liked your proposal. let us set up a meeting for further discussion.",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "email list not found.",
        });
      }
    }, 2000);
  });
};
