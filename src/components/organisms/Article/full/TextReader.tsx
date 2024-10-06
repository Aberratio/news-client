"use client";

import { useEffect, useState } from "react";

import Box from "components/atoms/Box";
import Button from "components/atoms/Button";

interface TextReaderProps {
  text: string;
}

export const TextReader = ({ text }: TextReaderProps) => {
  console.log({ text });
  let utterance: SpeechSynthesisUtterance | null = null;
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);

      const paulinaVoice = availableVoices.find(
        (voice) => voice.name === "Microsoft Paulina - Polish (Poland)"
      );
      setSelectedVoice(paulinaVoice || null);
    };

    loadVoices();

    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleSpeak = () => {
    if (!utterance) {
      utterance = new SpeechSynthesisUtterance(text);

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.rate = 1.3;
      utterance.pitch = 0;
      utterance.volume = 1;
    }

    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
    }
  };

  const handleResume = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    utterance = null;
  };

  return (
    <Box>
      <Button onClick={handleSpeak}>Start</Button>
      <Button onClick={handlePause}>Pauza</Button>
      <Button onClick={handleResume}>Resume</Button>
      <Button onClick={handleStop}>Stop</Button>
    </Box>
  );
};
