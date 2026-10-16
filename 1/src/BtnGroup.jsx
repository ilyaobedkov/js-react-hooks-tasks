import cn from 'classnames';
import React, { useState } from 'react';
const BtnGroup = () => {
  const [activeBtn, setActiveBtn] = useState(null);
  return (
    <div className="btn-group" role="group">
      <button
        type="button"
        className={cn('btn', 'btn-secondary', 'left', {
          active: activeBtn === 'left',
        })}
        onClick={() => setActiveBtn('left')}
      >
        Left
      </button>
      <button
        type="button"
        className={cn('btn', 'btn-secondary', 'right', {
          active: activeBtn === 'right',
        })}
        onClick={() => setActiveBtn('right')}
      >
        Right
      </button>
    </div>
  );
};
export default BtnGroup;