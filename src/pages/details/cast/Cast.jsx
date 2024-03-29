import React from 'react'
import { useSelector } from 'react-redux'
import "./Cast.css"

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import avatar from "../../../assets/avatar.png"


const Cast = ({ data, loading }) => {

  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className='circle skeleton'></div>
        <div className='row skeleton'></div>
        <div className='row2 skeleton'></div>
      </div>
    )
  }

  return (
    <div className='castSection'>
      <div className='sectionHeading'>Top Cast</div>
      <ContentWrapper>
        {!loading ? (<div className='listItems'>
          {data?.map((item) => {
            let imgUrl = item?.profile_path ? url.profile + item?.profile_path : avatar;
            return (

              <div key={item.id} className='listItem'>
                <div className='profileImg'>
                  <img src={imgUrl} alt={item?.name} />
                </div>
                <div className='name'>{item.name}</div>
                <div className='character'>{item.character}</div>
              </div>
            );
          })}

        </div>
        ) : (
          <div className='castSkeleton'>
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
        </ContentWrapper>
    </div>
      )
}

      export default Cast
