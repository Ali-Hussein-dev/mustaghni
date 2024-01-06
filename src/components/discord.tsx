import { Button, Text } from "@mantine/core";
import { FaDiscord } from "react-icons/fa6";

//======================================
export const Discord = () => {
  return (
    <div className="w-full pt-20">
      <div className="mx-auto w-full max-w-2xl rounded-3xl bg-gradient-to-tr from-violet-600 to-pink-600 p-[1px]">
        <div className="w-full gap-4 rounded-3xl bg-white py-10 flex-col-center">
          <div className="flex-col-center">
            <FaDiscord size="70" className="text-violet-500" />
            <Text size="lg" className="max-w-sm px-3 text-center">
              Connect with others on the Discord Server and get involved!
            </Text>
          </div>
          <a href="https://discord.gg/Esqs7f3J">
            <Button fw="bold" radius="lg">
              <Text fw="bold">Join Now</Text>
              {/* Join */}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
