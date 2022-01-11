import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { translationSelector } from 'app/reducers'
import { useTranslation } from 'app/hooks'
// Components
import Main from 'components/layout/Main'
import { SectionSecondary, SectionTitle } from 'components/ui/Section'
// Images
import UnderconstructionSvg from 'assets/images/underconstruction.svg'
import Markdown from 'components/ui/Markdown'

export default function Terms() {
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pageTerms')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: __('page-title')}), [currentLanguage])
    return (
        <Main>
            <section className="max-w-7xl mx-auto mt-8">
                <SectionTitle>{__('title')}</SectionTitle>
                <div className="">
                    <Markdown>{__('terms')}</Markdown>
                </div>
            </section>
        </Main>
    )
}
/*
## Définitions
Client : tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.

Prestations et Services : https://www.ourway.io/ met à disposition des Clients :

Contenu : Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.

Informations clients : Ci après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par https://www.ourway.io/ pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.

Utilisateur : Internaute se connectant, utilisant le site susnommé.

Informations personnelles : « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).

Les termes « données à caractère personnel », « personne concernée », « sous traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)

## 1. Présentation du site internet.
En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet https://www.ourway.io/ l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi:

Propriétaire : Ourway - 34 rue du village L-6183 Gonderange Luxembourg
Responsable publication : Ourway - yann@ourway.io
Webmaster: Yann Touil – yann@ourway.io
Hébergeur : OVH - 2 rue Kellermann BP 80157 59053 ROUBAIX CEDEX 1 France
Délégué à la protection des données : Yann Touil – yann@ourway.io
Les mentions légales sont conformes à RGPD

## 2. Conditions générales d’utilisation du site et des services proposés.
Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.

L’utilisation du site https://www.ourway.io/ implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site https://www.ourway.io/ sont donc invités à les consulter de manière régulière.

Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par https://www.ourway.io/, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le site web https://www.ourway.io/ est mis à jour régulièrement par https://www.ourway.io/ responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.

## 3. Description des services fournis.
Le site internet https://www.ourway.io/ a pour objet de fournir une information concernant l’ensemble des activités de la société. https://www.ourway.io/ s’efforce de fournir sur le site https://www.ourway.io/ des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.

Toutes les informations indiquées sur le site https://www.ourway.io/ sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site https://www.ourway.io/ ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.

## 4. Limitations contractuelles sur les données techniques.
Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour Le site https://www.ourway.io/ est hébergé chez un prestataire sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)

L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.

https://www.ourway.io/ et l’hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.

## 5. Propriété intellectuelle et contrefaçons.
https://www.ourway.io/ est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : https://www.ourway.io/

Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.

## 6. Limitations de responsabilité.
https://www.ourway.io/ agit en tant qu’éditeur du site. https://www.ourway.io/ est responsable de la qualité et de la véracité du Contenu qu’il publie.

https://www.ourway.io/ ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet https://www.ourway.io/, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.

https://www.ourway.io/ ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site https://www.ourway.io/. Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. https://www.ourway.io/ se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, https://www.ourway.io/ se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).
*/