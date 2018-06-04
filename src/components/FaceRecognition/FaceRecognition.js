import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
	var boundingBoxes = box.map(
			(item, index) => <div key = {'bounding-box-'+imageUrl+'-'+index} className='bounding-box' style={{top: item.topRow, right: item.rightCol, bottom: item.bottomRow, left: item.leftCol}}></div>
	);
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
				{ boundingBoxes }
				{/*<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>*/}
			</div>
		</div>
	);
};

export default FaceRecognition;