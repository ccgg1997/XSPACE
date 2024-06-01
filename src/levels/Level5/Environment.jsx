import { Environment } from "@react-three/drei";

export default function Environmentlvl5() {
  return (
    <Environment
      background={true}
      files={"/assets/hdris/sky.hdr"}
      preset={null}
    />
  );
}