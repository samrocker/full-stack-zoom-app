"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamCallProvider, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import { usegetallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";

const Meeting = ({ params: {id} }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const { call, isCallLoading } = usegetallById(id)

  if(!isLoaded || isCallLoading) return <Loader />

  return (
    <main className="h-screen w-full">
      <StreamCallProvider call={call}>
          <StreamTheme>
            {!isSetupComplete ? (
              <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
            ): (
              <MeetingRoom />
            )}
          </StreamTheme>
      </StreamCallProvider>
    </main>
  );
};

export default Meeting;
