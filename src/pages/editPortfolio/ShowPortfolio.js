import React from 'react';
import { Document,View, Text,PDFViewer,StyleSheet,Page,PDFDownloadLink } from '@react-pdf/renderer';

const st= StyleSheet.create({
    body:{
        paddingTop:35,
        paddingBottom:65,
        paddingHorizontal:35
    },
    title:{
        fontSize:24,
        textAlign:"center"
    },
    text:{
        background:'tomato',
        margin:100,
        fontSize:20,
        textAlign:"center",
        fontFamily:"Times-Roman"
    },
    header:{
        fontSize:12,
        marginBottom:20,
        textAlign:"center",
        color:"gray"
    },pageNumber:{
        position:"absolute",
        fontSize:12,
        bottom:30,
        left:0,
        right:0,
        textAlign:"center",
        color:"gray",
    }
});

const ShowPortfolio=()=>{
    
    return (
      <Document>
        <Page size="A4" style={st.body}>
          <Text style={st.header} fixed>
            {' '}
          </Text>

          <Text style={st.text} fixed>
            Novell, Inc. /noʊˈvɛl/ was an American software and services company headquartered in Provo, Utah. Its most
            significant product was the multi-platform network operating system known as Novell NetWare.Under the
            leadership of chief executive Ray Noorda, NetWare became the dominant form of personal computer networking
            during the second half of the 1980s and first half of the 1990s. At its high point, NetWare had a 63 percent
            share of the market for network operating systems and by the early 1990s there were over half a million
            NetWare-based networks installed worldwide encompassing more than 50 million users. Novell technology
            contributed to the emergence of local area networks, which displaced the dominant mainframe computing model
            and changed computing worldwide. Novell became instrumental in making Utah Valley a focus for technology and
            software development. During the early- to mid-1990s, Noorda attempted to compete directly with Microsoft by
            acquiring Digital Research, Unix System Laboratories, WordPerfect, and the Quattro Pro division of Borland.
            These moves did not work out, and NetWare began losing market share once Microsoft bundled network services
            with the Windows NT operating system and its successors. Despite new products such as Novell Directory
            Services and GroupWise, Novell entered a long period of decline. Eventually Novell acquired SUSE Linux and
            attempted to refocus its technology base. Despite building or acquiring several new kinds of products,
            Novell failed to find consistent success and never regained its past dominance. The company was an
            independent corporate entity until it was acquired as a wholly owned subsidiary by The Attachmate Group in
            2011, which in turn was acquired in 2014 by Micro Focus International. Novell products and technologies are
            now integrated within various Micro Focus divisions.
          </Text>

          <Text style={st.pageNumber} render={({pageNumber,tottalPages})=>`${pageNumber} / ${tottalPages}`} fixed/>
        </Page>
       
      </Document>
    );
}

export default ShowPortfolio;