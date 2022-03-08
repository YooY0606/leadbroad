import React, {useState, useEffect } from 'react';
import { Row, Col, Table } from "reactstrap";
import { db } from '../config/config';
import { collection,getDocs} from 'firebase/firestore';
function User() {
    const [ user,setUser ] = useState([]);
    const [ userscore,setRank ] = useState([]);
    var count = 0;
    const userCollectionRef = collection(db,"user");
    useEffect( () => {
        const getUser = async () => {
            const data = await getDocs(userCollectionRef);
            //console.log(data.docs.map( ( doc ) => ({ ...doc.data })));
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUser();

        const getRank = async () => {
          const sorted = user.sort((a, b) => b.score - a.score);
          setRank(sorted);
        }
        getRank();
    });
    const content = userscore.map((post)=>{
      count = count + 1;
        return (
          <tr key={count.toString(10)}>
            <th scope="row">{count.toString(10)}</th>
            <td>{post.name}</td>
            <td>{post.score}</td>
          </tr>
        );
    }
    )
    return (
        <div className="mt-4">
          <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <Table hover>
                    <thead>
                      <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Score</th>
                      </tr>
                      </thead>
                      <tbody>
                        {content}      
                      </tbody>
                  </Table>
              </Col>
          </Row>
        </div>
    )    
}
export default User