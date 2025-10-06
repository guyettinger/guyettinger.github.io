import Image from 'next/image';

export const UnityARPathway = () => {
  return (
    <section>
      <h2>Unity AR Pathway</h2>
      <section>
        <h3>AR Butterfly</h3>
        <Image
          src={'/images/portfolio/unity/ARButterfly.png'}
          alt={'AR Butterfly'}
          width={1999}
          height={1282}
        />
      </section>
      <section>
        <h3>AR Friend</h3>
        <Image
          src={'/images/portfolio/unity/ARFriend.png'}
          alt={'AR Friend'}
          width={1186}
          height={887}
        />
      </section>
      <section>
        <h3>AR Portal</h3>
        <Image
          src={'/images/portfolio/unity/ARPortal.png'}
          alt={'AR Portal'}
          width={1234}
          height={1831}
        />
      </section>
    </section>
  );
};
