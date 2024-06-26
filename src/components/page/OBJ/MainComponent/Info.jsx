import React, { useState } from "react";
import HVNBANNER from "../../../../pic/HVN_banner-trs.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Container from "./child/Info/Container";

function Info({ setUpForm, setUpNav, avatar, name, role, fb, ins, email, setIsSearch }) {
	const [advancedPage, setAdvancedPage] = useState(null);
	return (
		<div id="infoObjForm">
			<Container setUpForm={setUpForm} avatar={avatar || HVNBANNER} name={name} role={role} />

			<div id="container-advanced" className="container">
				<div className="container-left">
					{!fb && !ins ? (
						<p>Không có liên kết MXH</p>
					) : (
						<>
							{fb ? (
								<a target="_blank" rel="noreferrer" href={fb} className="fb btn">
									<FontAwesomeIcon icon={faSquareFacebook} />
									<span>Facebook</span>
								</a>
							) : null}
							{ins ? (
								<a target="_blank" rel="noreferrer" href={ins} className="ins btn">
									<FontAwesomeIcon icon={faSquareInstagram} />
									<span>Instagram</span>
								</a>
							) : null}
							{email ? (
								<a target="_blank" rel="noreferrer" href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}`} className="email btn">
									<FontAwesomeIcon icon={faEnvelope} />
									<span>Email</span>
								</a>
							) : null}
						</>
					)}
				</div>
				<div className="container-right">
					<div id="container-right-navbar" className="scrollX">
						{setUpNav.map((e, index) => (
							<React.Fragment key={`container-advanced-right-navbar_${index}`}>
								{e?.accept === role || !e?.accept ? (
									<button
										onClick={() => setAdvancedPage(e?.component)}
									>
										{e?.title}
									</button>
								) : null}
							</React.Fragment>
						))}
					</div>
					<div id="container-right-context">{advancedPage ? advancedPage : null}</div>
				</div>
			</div>

			<button id="infoObjFormReturn" onClick={() => setIsSearch(true)}>
				QUAY LẠI TÌM KIẾM
			</button>
		</div>
	);
}

export default React.memo(Info);