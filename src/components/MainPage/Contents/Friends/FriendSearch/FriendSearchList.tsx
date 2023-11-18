import './profileShape.css'

function FriendSearchList() {

    const temp = [
        { name: 'John', msg: 'Hello, Tester! Im Person!', online: true },
        { name: 'Julia', msg: 'Hello, Tester! Im Person!', online: false },
        { name: '김선향', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '송은선', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '전계림', msg: 'Hello, Tester! Im Person!', online: true },
        { name: 'John', msg: 'Hello, Tester! Im Person!', online: false },
        { name: 'Julia', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '김선향', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '송은선', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '전계림', msg: 'Hello, Tester! Im Person!', online: true },
        { name: 'John', msg: 'Hello, Tester! Im Person!', online: true },
        { name: 'Julia', msg: 'Hello, Tester! Im Person!', online: false },
        { name: '김선향', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '송은선', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '전계림', msg: 'Hello, Tester! Im Person!', online: true },
        { name: 'John', msg: 'Hello, Tester! Im Person!', online: true },
        { name: 'Julia', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '김선향', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '송은선', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '전계림', msg: 'Hello, Tester! Im Person!', online: true },
        { name: 'John', msg: 'Hello, Tester! Im Person!', online: true },
        { name: 'Julia', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '김선향', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '송은선', msg: 'Hello, Tester! Im Person!', online: true },
        { name: '전계림', msg: 'Hello, Tester! Im Person!', online: true },
    ]

    return ( 
        <div className="overflow-scroll w-100 pe-3 m-0 h-100
        row row-cols-2 row-cols-sm-3 row-cols-md-2 row-cols-lg-3
        row-cols-xl-3 row-cols-xxl-4 rounded-3 overflow-hidden">
            {
                temp.map((v, i) => (
                    <button className="btn btn-outline-light col p-2 py-3 py-sm-4 py-md-3 py-xxl-5
                    border-bottom border-right d-flex flex-column align-items-center row-gap-1 rounded-0"
                        key={i}>
                        <div className="bg-primary rounded-circle profile"></div>
                        <h6 className="text-body fw-bold m-0 d-flex
                        align-items-center column-gap-1">
                            {v.name}
                            <div className={`rounded-circle
                            ${v.online ? `bg-success` : `bg-danger`}`}
                                style={{ width: '10px', height: '10px' }}></div>
                        </h6>
                        <small className='p-0 m-0 text-secondary'>@name</small>
                        <small className="text-center text-secondary">{v.msg}</small>
                        {
                            i % 3 !== 0 ? <button className='btn btn-sm btn-outline-primary w-100 mt-2'>친구 추가</button> :
                            <button className='btn btn-sm btn-outline-danger w-100 mt-2'>친구 삭제</button>
                        }
                    </button>
                ))
            }
        </div>
    );
}

export default FriendSearchList;