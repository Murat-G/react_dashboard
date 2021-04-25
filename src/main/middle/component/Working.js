import axios from 'axios';
import React,{useEffect,useState} from 'react';
import WorkingElement from './WorkingElement';
import { styles } from './Working.style';

const Working = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3001/lessons");
            setData(response.data);
        }
        fetchData();
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.containerHead}>
                <div style={styles.containerLeft}>
                    <p style={styles.Text}> Çalışma Planı </p>
                </div>
                <div style={styles.containerRight}>
                    <p style={styles.Text}> Tamamlama </p>
                    <p style={styles.Text}> Yeterlilik Seviyen </p>
                </div>
            </div>

            <div style={styles.continerBottom}>
                    {
                    data.map((item) => (
                        <WorkingElement 
                            key={item.id}
                            item={item} 
                        />
                        )
                    )}
            </div>
        </div>
    )
}

export default Working


