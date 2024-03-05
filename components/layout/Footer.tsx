import MailIcon from "@/public/assets/icons/mail.svg";
import BlogIcon from "@/public/assets/icons/blog.svg";
import GithubIcon from "@/public/assets/icons/github.svg";

export default function Footer() {
  return (
    <footer className="bg-black py-5 text-white border-slim border-t-gray-50 border-solid flex flex-col items-center justify-center gap-3 text-sm snap-start">
      <div className="flex gap-5">
        <a href="https://velog.io/@ssulv3030/posts">
          <BlogIcon width={32} height={32} fill={"white"} />
        </a>
        <a href="https://github.com/Lee-Yeseul">
          <GithubIcon width={32} height={32} fill={"white"} />
        </a>
        <a href="mailto:ssulv3030@gmail.com">
          <MailIcon width={32} height={32} fill={"white"} />
        </a>
      </div>
      <div>©2024. YESEUL LEE. All rights reserved</div>
    </footer>
  );
}
