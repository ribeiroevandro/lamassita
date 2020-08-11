import Link from 'next/link'
import styled from "styled-components";

// import BasicLayout from 'layout/Basic'
import BasicLayout from 'layout/Basic'

const Title = styled.h1`
  color: var(--primary);
`;

const Home = () => {
  return (
    <BasicLayout title="La Massita">
      <Title>Teste</Title>
      <Link href="/signin">
        <a>Login</a>
      </Link>
    </BasicLayout>
  )
}

export default Home