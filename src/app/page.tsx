import Image from "next/image";
import styles from "./page.module.css";
import PostList from "@/components/postList/PostList";
import ChildrenPropExample from "./2-children-prop-example/page";
import EventExample from "./3-event-example/page";
import UseStateExample from "./4-usestate-example/page";
import UseContextExample from "./5-usecontext-example/page";
import UseRefExample from "./6-useref-example/page";

export default function Home() {
  return <UseRefExample />;
}
