import CooperativeIllustration from "../../assets/cooperative_illustration.png";
import { Image } from "./styles";

export function FrontPageImage() {
  return (
    <Image
      src={CooperativeIllustration}
      alt="Illustration of two men cooperating to recycle the trash"
    />
  );
}
