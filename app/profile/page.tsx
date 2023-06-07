import { authConfig } from '@/configs/auth'
import { getServerSession } from 'next-auth/next'
import Image from 'next/image'
export default async function Profile() {
  const session = await getServerSession(authConfig)
  return (
    <div>
      <h1>
        Profile {session?.user?.name}
      </h1>
      {session?.user?.image && <Image src={session?.user?.image} alt={`Picture of ${session?.user?.name}`} />}
    </div>
  )
}