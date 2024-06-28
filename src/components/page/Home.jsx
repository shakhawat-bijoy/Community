import React from 'react'
import Sidebar from '../Sidebar'
import PopularTags from '../PopularTags'
import PinnedGroup from '../PinnedGroup'
import Container from '../layer/Container'
import CreatPost from '../CreatPost'
import SamplePost from '../SamplePost'
import Meetups from '../Meetups'
import PodcastsRightBar from '../PodcastsRightBar'
import Posts from '../Posts'

const Home = () => {
  return (
    <div className='bg-[#1e242a]'>
      <Container className="flex gap-x-5 py-5">

        <div className='lg:flex flex-col gap-5 hidden'>
            <Sidebar/>
            <PopularTags/>
            <PinnedGroup/>
        </div>

        <div className='flex flex-col gap-5'>
          <CreatPost/>
          {/* <SamplePost/> */}
          <Posts/>
        </div>

        <div className='lg:flex flex-col gap-5 hidden'>
          <Meetups/>
          <PodcastsRightBar/>
        </div>

      </Container>
    </div>
  )
}

export default Home