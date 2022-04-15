import React from 'react';
import {Link} from "gatsby";
import Layout from "../components/layout"
import * as styles from "../styles/company.css";

const CompanyPage = () => {
    return (  
        <Layout>
            <div data-companyWrapper>
                <div data-companyGrid>
                    <Link to="/fsap">
                        <div data-item>
                            <img src="" alt="Preview FSAP" width="30" />
                            <h3> FSAP </h3>
                        </div>
                    </Link>
                    <div data-item>
                        <img src="" alt="Preview Notice" width="30" />
                        <h3> Notice </h3>
                    </div>
                    <div data-item>
                        <img src="" alt="Preview Livret" width="30" />
                        <h3> Livret </h3>
                    </div>
                    <div data-item>
                        <img src="" alt="Preview VGP" width="30" />
                        <h3> VGP </h3>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CompanyPage;