import {RiArticleFill} from '@react-icons/all-files/ri/RiArticleFill'


export default {
    name: 'cartes',
    type: 'document',
    title: 'Cartes',
    icon: RiArticleFill,
    fields: [
      {
        name: 'nomFR',
        type: 'string',
        title: 'Nom Français',
      },
      {
        name: 'nomCSC',
        type: 'string',
        title: 'Nom Corse',
      },
      {
        name: 'nomEN',
        type: 'string',
        title: 'Nom Anglais',
      },
      {
        name: 'nomJP',
        type: 'string',
        title: 'Nom Japonais',
      },
      {
        name: 'nomGER',
        type: 'string',
        title: 'Nom Allemand',
      },
    ],
    preview: {
      select: {
          nom: 'nomFR',
          nomCSC: 'nomCSC', 
          nomEN: 'nomEN',
          nomJP: 'nomJP',
          nomGER: 'nomGER'
      },
      prepare(selection : any) {
          const {nom, nomCSC, nomEN, nomGER, nomJP} = selection
          const noms = [nom, nomCSC, nomEN, nomGER, nomJP].filter(Boolean)
          const nomsTraduits = noms.map(nom => {
            if (nom === "nom") {
              return "Français";
            } else if (nom === "nomCSC") {
              return "Corse";
            } else if (nom === "nomEN") {
              return "Anglais";
            } else if (nom === "nomGER") {
              return "Allemand";
            } else if (nom === "nomJP") {
              return "Japonais";
            } else {
              return nom;
            }
          });
          const subtitle = nomsTraduits.length > 0 ? `${nomsTraduits.join(' ● ')}` : 'Pas de catégorie'
          return {
          title: nom,
          subtitle,
          }
      }
  }    
}