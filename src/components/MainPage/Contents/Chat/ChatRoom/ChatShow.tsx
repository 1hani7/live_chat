export default function ChatShow(){

    const temp = [
        {
            profileImg: '',
            name: 'James',
            comments: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, pariatur. Ratione ipsam assumenda ea magni.`,
            isUser: false,
            time: '2023/11/17 PM 13:31'
        },
        {
            profileImg: '',
            name: 'Shin',
            comments: `Lorem ipsum dolor sit amet.`,
            isUser: true,
            time: '2023/11/17 PM 13:31'
        },
        {
            profileImg: '',
            name: 'James',
            comments: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, necessitatibus.`,
            isUser: false,
            time: '2023/11/17 PM 13:31'
        },
        {
            profileImg: '',
            name: 'Shin',
            comments: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, architecto. Culpa atque fugit vero! Qui consectetur saepe culpa eligendi commodi obcaecati reiciendis, facere fuga esse. Adipisci, asperiores incidunt. Numquam, voluptatum.`,
            isUser: true,
            time: '2023/11/17 PM 13:31'
        },
        {
            profileImg: '',
            name: 'James',
            comments: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At saepe ut qui velit hic quia cum atque iste repellendus nesciunt consequatur rem sunt, alias odit iusto provident vero eligendi ex nostrum natus quibusdam dolorum et. Reprehenderit ratione provident unde itaque.`,
            isUser: false,
            time: '2023/11/17 PM 13:31'
        },
        {
            profileImg: '',
            name: 'James',
            comments: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At saepe ut qui velit hic quia cum atque iste repellendus nesciunt consequatur rem sunt, alias odit iusto provident vero eligendi ex nostrum natus quibusdam dolorum et. Reprehenderit ratione provident unde itaque.`,
            isUser: true,
            time: '2023/11/17 PM 13:31'
        },
        {
            profileImg: '',
            name: 'James',
            comments: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At saepe ut qui velit hic quia cum atque iste repellendus nesciunt consequatur rem sunt, alias odit iusto provident vero eligendi ex nostrum natus quibusdam dolorum et. Reprehenderit ratione provident unde itaque.`,
            isUser: false,
            time: '2023/11/17 PM 13:31'
        },
        {
            profileImg: '',
            name: 'James',
            comments: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At saepe ut qui velit hic quia cum atque iste repellendus nesciunt consequatur rem sunt, alias odit iusto provident vero eligendi ex nostrum natus quibusdam dolorum et. Reprehenderit ratione provident unde itaque.`,
            isUser: false,
            time: '2023/11/17 PM 13:31'
        },
        {
            profileImg: '',
            name: 'James',
            comments: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At saepe ut qui velit hic quia cum atque iste repellendus nesciunt consequatur rem sunt, alias odit iusto provident vero eligendi ex nostrum natus quibusdam dolorum et. Reprehenderit ratione provident unde itaque.`,
            isUser: true,
            time: '2023/11/17 PM 13:31'
        }
    ]

    return(
        <div className="overflow-scroll px-3 shadow-sm rounded">
            {
                temp.map((item, idx) => (
                    <div className={
                        `d-flex align-items-center p-0 mb-4
                        ${item.isUser === true ? 'flex-row-reverse' : ''}`
                    } key={idx}>
                        <div className="flex-shrink-0 rounded-circle bg-primary"
                        style={{width:'50px', height:'50px'}}>

                        </div>
                        <div className={
                            `shadow-sm rounded p-3 w-75 m-0
                            d-flex flex-column
                            ${item.isUser === true ? 'me-3' : 'ms-3'}`
                            }>
                            <div className="p-0">{item.comments}</div>
                            <small className={
                                `p-0 mt-1 text-secondary
                                ${item.isUser === true ? `ms-auto` : `me-auto`}`
                            }>
                                {item.time}
                            </small>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}