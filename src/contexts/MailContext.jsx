import { createContext, useEffect, useState } from "react";
import { fakefetch } from "../api/fakeMail";

const MailContext = createContext(null);

const MailContextProvider = (props) => {
  const [allMails, setAllMails] = useState([]);
  const [sentEmails, setSentEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const markMailasRead = (mailID) => {
    // setAllMails((prevMails) => {
    //   return prevMails.filter(({ id }) => id !== mailID);
    // });
    // setAllMails(prevMails => {
    //   return prevMails.map((mail)=>{
    //     if(mail.read){
    //       return mail
    //     }
    //     return [...mail,read:true]
    //   })
    // })
  };

  const fetchMailData = async () => {
    try {
      setIsLoading(true);
      const { data, status } = await fakefetch("https://example.com/api/allemails");
      setAllMails(data.emails);
      setSentEmails(data.sentemails);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMailData();
  }, []);

  return (
    <MailContext.Provider value={{ allMails, sentEmails, isLoading, markMailasRead }}>
      {props.children}
    </MailContext.Provider>
  );
};

export { MailContext, MailContextProvider };
