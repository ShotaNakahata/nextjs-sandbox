import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export const metadata = {
  title : "Home",
  description:"This is the home page of our Next.js app."
}

export default function Home() {
  return (
    <div>
      <Link href="./posts">go to firstPost</Link>
    </div>
  );
}
