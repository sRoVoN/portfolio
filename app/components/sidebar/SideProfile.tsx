import Image from "next/image";

type SidebarKeys = 'name' | 'logoAlt' | 'title' | 'bio' | 'avatar';
 type Props = {
 tSidebar: (key: SidebarKeys) => string;
}

function SideProfile({tSidebar}: Props) {
  return (
    <div className="mx-auto w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 dark:border-neutral-700">
      <Image
        src="/avatar.png"
        alt={tSidebar("name")}
        width={96}
        height={96}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default SideProfile;
