import EmailSignIn from '@/components/EmailSignIn';
import GoogleButton from '@/components/GoogleButton';

export default function SignIn() {
  return (
    <div className='stack'>
      <h1>SignIn</h1>
      <GoogleButton />
      <div>- or -</div>
      <EmailSignIn />
    </div>
  )
}