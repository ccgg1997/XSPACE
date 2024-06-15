import { Environment } from "@react-three/drei";

const url = "https://josem-18.github.io/sourcesPI/hdris/nebulosa.hdr"
export default function Environmentlvl6() {
  
  return (
    <Environment
      background={true}
      files={url}
      preset={null}
    />
  );
}