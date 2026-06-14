'use client';
import LetterGlitch from "./LetterGlitch";

export default function GlitchBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={false}
        outerVignette={false}
        smooth={true}
        glitchColors={["#FF006E","#00FF9F","#0080FF"]}
        characters={"ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"}
      />
    </div>
  );
}
