import { title } from "process";

import { VscDebugStart } from "react-icons/vsc";
import { BsOpencollective } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";
import { BiCookie } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { GoLaw } from "react-icons/go";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { TbHammer } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";

export const PrivacyPolicyData = [
  {
    title: "Introduction",
    text: "Welcome to SpeedyUploads.com's Privacy Policy. Yes, it's as thrilling as it sounds. But don’t worry, we’ve made it as painless as possible. We respect your privacy, mainly because we have our own, and we wouldn’t want anyone messing with ours either.",
    icon: <VscDebugStart />,
  },
  {
    title: "Personal Data We Collect",
    text: "We collect only the essentials: your email, IP address, and any files you upload. We promise not to dig through your vacation photos unless you explicitly ask us to. And by essentials, we mean the absolute minimum to keep our service running smoothly.",
    icon: <BsOpencollective />,
  },
  {
    title: "Cookie Policy",
    text: "Yes, we use cookies. No, not the delicious kind you dunk in milk. These little digital ones help us remember who you are, so you don’t have to log in every five seconds. Plus, they help us improve our site, which is a win-win.",
    icon: <BiCookie />,
  },
  {
    title: "Retention & Deletion",
    text: "We keep your data only as long as necessary. Think of it like a temporary tattoo, it’ll stick around just long enough to serve its purpose, then poof, it’s gone. You can request deletion at any time, and we'll make it happen faster than you can say privacy",
    icon: <AiOutlineDelete />,
  },
  {
    title: "Your Rights to Your Personal Data",
    text: "You have rights. No, not the right to bear arms, but the right to access, correct, and delete your data. If you feel the urge to exercise these rights, just let us know, and we’ll sort it out quicker than a hiccup.",
    icon: <GoLaw />,
  },
  {
    title: "Changes",
    text: "We might update this policy occasionally. Don’t worry, we won’t make any sneaky changes. If anything major happens, we’ll let you know, probably with a sarcastic email you’ll thoroughly enjoy reading.",
    icon: <CgArrowsExchangeAlt />,
  },
  {
    title: "Complaints",
    text: "Got complaints? Hopefully, not too many. But if you do, let us know. We’ll handle it with the seriousness of a toddler eating broccoli. Just kidding. We’ll take it seriously and work to resolve it pronto.",
    icon: <TbHammer />,
  },
  {
    title: "Contact Us",
    text: "Need to contact us? Want to request your data or just send us a funny meme? You can reach out anytime. We’re here to help, or at least pretend we know what we’re doing. Just kidding again. We actually do.",
    icon: <RiContactsLine />,
  },
];
