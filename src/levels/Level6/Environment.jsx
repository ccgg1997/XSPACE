import { Environment } from "@react-three/drei";

export default function Environmentlvl6() {
  return (
    <Environment
      background={true}
      files={"/assets/hdris/nebulosa.hdr"}
      preset={null}
    />
  );
}