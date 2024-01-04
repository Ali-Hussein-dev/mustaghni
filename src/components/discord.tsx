import { Button, Text } from "@mantine/core";
import { FaDiscord } from "react-icons/fa6";

//======================================
export const Discord = () => {
  return (
    <div className="w-full pt-20">
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-solid bg-gradient-to-b from-violet-800 to-violet-900 p-1 pb-2 text-white">
        <div className="w-full gap-4 rounded-3xl bg-white py-10 flex-col-center">
          <FaDiscord size="70" className="text-violet-500" />
          <a href="https://discord.gg/Esqs7f3J">
            <Button fw="bold" radius="lg">
              <Text fw="bold">Join Our Discord Server</Text>
              {/* Join */}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
