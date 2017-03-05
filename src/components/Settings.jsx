import React from 'react';

const Settings = ({ isSettingsShown, events }) => {
	return (
		<div className='settings'>
			<a href='#' onClick={events.onSettingsClick}>
				<i className='fi-widget'></i>
			</a>
			<section className='reveal tiny settings-modal' id='settings-modal' data-reveal>
				<h2>Settings</h2>
				<div className='row'>
					<div className='column'>
						<label>Sort order:</label>
						<div className='switch small'>
							<input className='switch-input' id='asc-desc' type='checkbox' name='orderSwitch' />
							<label className='switch-paddle' htmlFor='asc-desc'>
								<span className='show-for-sr'>Sort Order</span>
								<span className='switch-active' aria-hidden='true'>A</span>
								<span className='switch-inactive' aria-hidden='true'>D</span>
							</label>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='column'>
						<label htmlFor='settings-limit'>Limit</label>
						<input type='number' id='settings-limit' placeholder='Limit' min='0' max='100' />
					</div>
					<div className='column'>
						<label htmlFor='settings-offset'>Start</label>
						<input type='number' id='settings-offset' placeholder='Start' min='0' max='100' />
					</div>
				</div>
				<div className='row'>
					<div className='column'>
						<a href='#' className='button secondary' onClick={events.onSettingsCancelClick}>
							<i className='fi-x'></i>
							&ensp;Cancel
						</a>
					</div>
					<div className='column'>
						<a href='#' className='button primary' onClick={events.onSettingsSaveClick}>
							<i className='fi-check'></i>
							&ensp;Save
						</a>
					</div>
				</div>
			</section>
			<script>console.log('test'); $('#settings-modal').foundation('open');</script>
		</div>
	);
};

export default Settings;
