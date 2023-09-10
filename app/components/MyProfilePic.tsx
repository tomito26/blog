import Image from "next/image"
export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="h-32 w-32 object-cover border-4 light:border-black border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/profile.jpg"
        height={200}
        width={200}
        alt="animated github logo"
        priority

      />
    </section>
  )
}
