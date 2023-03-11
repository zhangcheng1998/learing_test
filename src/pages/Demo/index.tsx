import { FC, useEffect, useState } from "react";
import axios from "axios";

const Demo: FC = (data) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .post("/api/getDemoData", {
        content: "这是一个demo页面",
      })
      .then((res: any) => {
        console.log("ressss", res.data.data.content);
        setContent(res.data.data.content);
      });
  }, []);

  // useEffect(() => {
  //     axios
  //       .post("/api/getDemoData", {
  //         content: "这是一个demo页面",
  //       })
  //       .then((res: any) => {
  //         setContent(res.data?.data?.content);
  //       });
  //   }, []);
  return <div>{content}</div>;
};
export default Demo;
