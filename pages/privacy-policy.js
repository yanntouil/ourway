import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { translationSelector } from 'app/reducers'
import { useTranslation } from 'app/hooks'
// Components
import Main from 'components/layout/Main'
import { SectionSecondary, SectionTitle } from 'components/ui/Section'
// Images
import UnderconstructionSvg from 'assets/images/underconstruction.svg'

export default function PrivacyPolicy() {
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pagePrivacy')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: __('page-title')}), [currentLanguage])
    return (
        <Main>
            <div className="max-w-7xl mx-auto mt-8">
                <SectionTitle>{__('title')}</SectionTitle>
                <SectionSecondary>{__('secondary')}</SectionSecondary>
            </div>
            <div className="relative max-w-7xl mx-auto mt-16 sm:mt-24">
                <UnderconstructionSvg className="" />
            </div>
        </Main>
    )
}
/*
POLITIQUE
DE CONFIDENTIALITÉ
7. Gestion des données personnelles.
Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).

7.1 Responsables de la collecte des données personnelles
Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : https://osmoz.lu/ est représenté par Malpas Thomas, son représentant légal

En tant que responsable du traitement des données qu’il collecte, https://osmoz.lu/ s’engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client d’établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à partir de la collecte de leurs consentements, une information complète sur le traitement de leurs données personnelles et de maintenir un registre des traitements conforme à la réalité. Chaque fois que https://osmoz.lu/ traite des Données Personnelles, https://osmoz.lu/ prend toutes les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles https://osmoz.lu/ les traite.

7.2 Finalité des données collectées
https://osmoz.lu/ est susceptible de traiter tout ou partie des données :

pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l’utilisateur : données de connexion et d’utilisation du Site, facturation, historique des commandes, etc.
pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l’adresse IP, le mot de passe (hashé)
pour améliorer la navigation sur le Site : données de connexion et d’utilisation
pour mener des enquêtes de satisfaction facultatives sur https://osmoz.lu/ : adresse email
pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email
https://osmoz.lu/ ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d’analyses.

7.3 Droit d’accès, de rectification et d’opposition
Conformément à la réglementation européenne en vigueur, les Utilisateurs de https://osmoz.lu/ disposent des droits suivants :

droit d’accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs droit de verrouillage ou d’effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu’elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l’utilisation, la communication ou la conservation est interdite
droit de retirer à tout moment un consentement (article 13-2c RGPD)
droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD)
droit d’opposition au traitement des données des Utilisateurs (article 21 RGPD)
droit à la portabilité des données que les Utilisateurs auront fournies, lorsque ces données font l’objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD)
droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui https://osmoz.lu/ devra communiquer (ou non) ses données à un tiers qu’ils aura préalablement désigné
Dès que https://osmoz.lu/ a connaissance du décès d’un Utilisateur et à défaut d’instructions de sa part, https://osmoz.lu/ s’engage à détruire ses données, sauf si leur conservation s’avère nécessaire à des fins probatoires ou pour répondre à une obligation légale.

Si l’Utilisateur souhaite savoir comment https://osmoz.lu/ utilise ses Données Personnelles, demander à les rectifier ou s’oppose à leur traitement, l’Utilisateur peut contacter https://osmoz.lu/ par écrit à l’adresse suivante :

– DPO, Osmoz Web Agency
45 Zone Op Zaemer 4959 Bascharage.

Dans ce cas, l’Utilisateur doit indiquer les Données Personnelles qu’il souhaiterait que https://osmoz.lu/ corrige, mette à jour ou supprime, en s’identifiant précisément avec une copie d’une pièce d’identité (carte d’identité ou passeport).

Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à https://osmoz.lu/ par la loi, notamment en matière de conservation ou d’archivage des documents. Enfin, les Utilisateurs de https://osmoz.lu/ peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).

7.4 Non-communication des données personnelles
https://osmoz.lu/ s’interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l’Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client. Pour autant, https://osmoz.lu/ reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu’il présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).

https://osmoz.lu/ s’engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu’elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l’intégrité ou la confidentialité des Informations du Client est portée à la connaissance de https://osmoz.lu/ , celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs, https://osmoz.lu/ ne collecte aucune « données sensibles ».

Les Données Personnelles de l’Utilisateur peuvent être traitées par des filiales de https://osmoz.lu/ et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique.

Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d’avoir accès aux données des Utilisateurs de https://osmoz.lu/ sont principalement les agents de notre service client.

7.5 Types de données collectées
Concernant les utilisateurs d’un Site https://osmoz.lu/,nous collectons les données suivantes qui sont indispensables au fonctionnement du service , et qui seront conservées pendant une période maximale de / mois après la fin de la relation contractuelle:
/

https://osmoz.lu/ collecte également des informations qui améliorent l’expérience utilisateur et offre des astuces contextualisées:
/

Ces données sont conservées pendant un maximum de / mois après la fin de la relation contractuelle.

8. Notification d’incident.
Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n’est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue. Si nous prenions connaissance d’une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu’ils puissent prendre les mesures appropriées. Nos procédures de notification d’incident tiennent compte de nos obligations légales, qu’elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.

Aucune information personnelle de l’utilisateur du site https://osmoz.lu/ n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du rachat de https://osmoz.lu/ et de ses droits permettrait la transmission des dites informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l’utilisateur du site https://osmoz.lu/.

Sécurité
Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, https://osmoz.lu/ utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l’encryption et mot de passe.

Lors du traitement des Données Personnelles, https://osmoz.lu/ prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.

9. Liens hypertextes « cookies » et balises (“tags”) internet
Le site https://osmoz.lu/ contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de https://osmoz.lu/. Cependant, https://osmoz.lu/ n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.

Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés par le site.

9.1. « COOKIES »
Un « cookie » est un petit fichier d’information envoyé sur le navigateur de l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur, smartphone), (ci-après « Cookies »). Ce fichier comprend des informations telles que le nom de domaine de l’Utilisateur, le fournisseur d’accès Internet de l’Utilisateur, le système d’exploitation de l’Utilisateur, ainsi que la date et l’heure d’accès. Les Cookies ne risquent en aucun cas d’endommager le terminal de l’Utilisateur.

https://osmoz.lu/ est susceptible de traiter les informations de l’Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à https://osmoz.lu/ d’améliorer le contenu du Site, de la navigation de l’Utilisateur.

Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le Site, l’Utilisateur peut configurer son navigateur pour qu’il lui permette de décider s’il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu’ils soient rejetés, soit systématiquement, soit selon leur émetteur. L’Utilisateur peut également configurer son logiciel de navigation de manière à ce que l’acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu’un Cookie soit susceptible d’être enregistré dans son terminal. https://osmoz.lu/ informe l’Utilisateur que, dans ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas toutes disponibles.

Si l’Utilisateur refuse l’enregistrement de Cookies dans son terminal ou son navigateur, ou si l’Utilisateur supprime ceux qui y sont enregistrés, l’Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait également être le cas lorsque, https://osmoz.lu/ ou l’un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d’affichage ou le pays depuis lequel le terminal semble connecté à Internet.

Le cas échéant, https://osmoz.lu/ décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des services éventuellement proposés par https://osmoz.lu/, résultant (i) du refus de Cookies par l’Utilisateur (ii) de l’impossibilité pour https://osmoz.lu/ d’enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l’Utilisateur. Pour la gestion des Cookies et des choix de l’Utilisateur, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d’aide du navigateur, qui permettra de savoir de quelle manière l’Utilisateur peut modifier ses souhaits en matière de Cookies.

À tout moment, l’Utilisateur peut faire le choix d’exprimer et de modifier ses souhaits en matière de Cookies. https://osmoz.lu/ pourra en outre faire appel aux services de prestataires externes pour l’aider à recueillir et traiter les informations décrites dans cette section.

Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de https://osmoz.lu/ ou dans son application mobile et si l’Utilisateur a accepté le dépôt de cookies en poursuivant sa navigation sur le Site Internet ou l’application mobile de https://osmoz.lu/ , Twitter, Facebook, Linkedin et Google Plus peuvent également déposer des cookies sur vos terminaux (ordinateur, tablette, téléphone portable).

Ces types de cookies ne sont déposés sur vos terminaux qu’à condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l’application mobile de https://osmoz.lu/ . À tout moment, l’Utilisateur peut néanmoins revenir sur son consentement à ce que https://osmoz.lu/ dépose ce type de cookies.

Article 9.2. BALISES (“TAGS”) INTERNET
https://osmoz.lu/ peut employer occasionnellement des balises Internet (également appelées « tags », ou balises d’action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer par l’intermédiaire d’un partenaire spécialiste d’analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l’adresse IP de l’Utilisateur) dans un pays étranger.

Ces balises sont placées à la fois dans les publicités en ligne permettant aux internautes d’accéder au Site, et sur les différentes pages de celui-ci.

Cette technologie permet à https://osmoz.lu/ d’évaluer les réponses des visiteurs face au Site et l’efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte et les informations consultées), ainsi que l’utilisation de ce Site par l’Utilisateur.

Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs du Site et d’autres sites Internet grâce à ces balises, constituer des rapports sur l’activité du Site à l’attention de https://osmoz.lu/, et fournir d’autres services relatifs à l’utilisation de celui-ci et d’Internet.

10. Droit applicable et attribution de juridiction.
Tout litige en relation avec l’utilisation du site https://osmoz.lu/ est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Luxembourg



*/