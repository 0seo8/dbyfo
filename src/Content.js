import { useState } from "react";

function Content() {
    const [visible, setVisible] = useState(false);
    const [imageNumber, setImageNumber] = useState(0)
    const obj = {
        data: [
            {
                title: "Food Branding / 6 - 10 / FIET",
                year: "2023",
                content: "Loop Core는 FIET가 개발한 AI 기술 기반의 개인 맞춤형 운동 컨텐츠 Loop 서비스를 위한 측정기기입니다.\
                옷이나 운동 기기, 밴드에 부착하여 사용하며 내장된 센서가 사용자의 움직임을 측정하고 평가하여 올바른 운동 자세를 제안합니다. \
                일정 기간의 사용을 통해 누적된 고객 데이터는 운동 효과 관리를 위한 자료가 됩니다 옷에 부착될 경우는 내장된 EMS( electrical muscle stimulation ) 기능을 통하여 시간을 \
                절약하고 운동 효과를 개선해줍니다. 기기는 2개가 한 쌍으로 충전 가능한 포터블케이스에 수납되며 다양한 기기와의 부착을 위해 매우 컴팩트한 사이즈로 \
                디자인되었습니다. 한손에 들어오는 케이스는 여러번의 실험을 거치 작은 손에도 잘 쥐어지는 사이즈를 테스트 하였다. \
                다른 기기와의 연결은 자석을 이용한 일관된 구조를 적용해서 쉽게 연결할 수 있다. \
                운동 중에 제품을 강도를 조작해야 하거나 또는 기기의 상태를 확인해야 될 경우를 위해 쓰기 쉬운 커다란  + / - 버튼과 \
                직관적인 라이팅 컬러를 적용하였으며 소재 또한 손에 닿는 부분은 부드러운 이중사출 기술을 적용하여 PU재질의 \
                표면에 옷의 질감과 유사한 미세한 패텬을 적용하여 시각적인 통일감과 사용시 미끄러지는 불편함이 없도록 하였다.",
            },
        ],
    };

    return (
        <div onClick={() => {setVisible(!visible)}}>
            {obj.data.map((item) => {
                return (
                    <>
                    {!visible && <div className="title_year">
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="year">
                            {item.year}
                        </div>
                    </div>}
                    
                    {visible && 
                        <div className="content">
                            <div className="inner_title">
                                {item.title}
                            </div>
                            <div className="inner_year">
                                {item.year}
                            </div>
                            <div className="inner_blank"></div>
                            <div className="inner_container">
                                <div className="inner_content">
                                    {item.content}
                                    <div className="inner_footer"> Designer : Euiseok kim, Seungcheol Lee, Junku jung / Client : FIET</div>
                                </div>
                                <div className="inner_image" onClick={
                                    () => {
                                        setImageNumber((imageNumber + 1)%3)
                                    }
                                }>
                                    <img className="image_file" src="img/photo1.png" />
                                    <div className="inner_image_footer"> Smart fit wear, Loop core. 'Just put it on.'' </div>
                                </div>

                            </div>
                            
                        </div>
                    }
                    
                    </>
                )   
            })}
        </div>
    )
}

export default Content