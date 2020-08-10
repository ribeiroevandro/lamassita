import Link from 'next/link'
import { LocalBusinessJsonLd } from 'next-seo'
import styled from "styled-components";

// import BasicLayout from 'layout/Basic'
import BasicLayout from 'layout/Basic'

const Title = styled.h1`
  color: var(--primary);
`;

const Home = () => {
  return (
    <BasicLayout title="DevSpace.app">
      <LocalBusinessJsonLd
        type="Store"
        id="http://davesdeptstore.example.com"
        name="Dave's Department Store"
        description="Dave's latest department store in San Jose, now open"
        url="http://www.example.com/store-locator/sl/San-Jose-Westgate-Store/1427"
        telephone="+14088717984"
        address={{
          streetAddress: '1600 Saratoga Ave',
          addressLocality: 'San Jose',
          addressRegion: 'CA',
          postalCode: '95129',
          addressCountry: 'US',
        }}
        geo={{
          latitude: '37.293058',
          longitude: '-121.988331',
        }}
        images={[
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg',
        ]}
        openingHours={[
          {
            opens: '08:00',
            closes: '23:59',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            validFrom: '2019-12-23',
            validThrough: '2020-04-02',
          },
          {
            opens: '14:00',
            closes: '20:00',
            dayOfWeek: 'Sunday',
            validFrom: '2019-12-23',
            validThrough: '2020-04-02',
          },
        ]}
      />
      <Title>Teste</Title>
      <Link href="/signin">
        <a>Login</a>
      </Link>
    </BasicLayout>
  )
}

export default Home