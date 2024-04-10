import React from 'react';

export const Skeleton = ({item}) => {

  return (
    <>
      {
        item ? (
          <img
            style={{
              width: 210,
              height: 118,
            }}
            alt={item.title}
            src={item.src}
          />
        ) : (
          <Skeleton variant="rectangular" width={210} height={118} />
        )
      }

    </>
  );
}


