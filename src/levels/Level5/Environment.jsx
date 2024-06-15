import { Environment } from "@react-three/drei";

export default function Environmentlvl5() {
  const hdriUrl = "https://josem-18.github.io/sourcesPI/hdris/nebulosa.hdr"
  
  return (
    <Environment
      background={true}
      files={hdriUrl}
      preset={null}
    />
  );
}