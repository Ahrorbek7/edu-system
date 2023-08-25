import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp, getApps, cert } from 'firebase-admin/app'

const apps = getApps()

if (!apps.length) {
    initializeApp({
        credential: cert({
            type: "service_account",
            project_id: "appcha-51d80",
            private_key_id: "a758ef60647481ac8d4f9c16483886c5599b44be",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJVh789nczY/Pr\nXHcREmmw2BnYMd7/jm8/kxCFSsTLjCjFjaY0CpKE1nbkfMfH5arjnfKZHxPfwER6\nmXPzTW6ttj/BGCGB/bDmKFjaAUkFKAL6oHtNbqprr06STuNjaGlUEiwSvJyjVcNh\nNxFctWVrpVjkJjnNV8plMXCTlN4mLGHKpjyLw7YbBPmDQRUJu/kBfiNYvU+B+OB3\n34Wbi6oh1U7AigHcMIl2Ao8yyRgefn5UM41Swag0G/wrD/EP4KI76GIkya4/nMmz\nsvK+bYsmZgToMW7fPo0XSRov0ciP2/ohd+81nVkAC03MZtm8ZYzYpIfueqZBfuhU\nLWNURoidAgMBAAECggEAGF+QX0u/+Ozt+61lLaAmwtWaZVl+Nz5JOe9GBfjb8487\nZVUFTJIGFEY5POZdMhYb1rPJiV9hgsoOEDBxAMB8OFPSin/vGIM7bdVvEi8rJZBn\nMeuJGcHeqCwgDSa3MNLUQ2zywG7sYHqSrTtjIu/DwCETboUxJKpu0krGp9sS/JhW\nLq7l1A2ZRYNV+X8wTZ0UhpD3m6hSUkUGinbTSHMDMPZvnM2Q5GUSFP7xwe0dZ//G\nqVqmRV1J4WeOMvPiGpddMG4tRh78WRUMKOLcK6D6Sngr73umy3/0XLTo8amybJ4C\n/Hc+93ZGHCNrMnxNIrhfQc7H69kDT35zbbcvswohuQKBgQD3lAXOmQH25IVPRkof\nsTYiMac9MxEr6bSweBBgX+X7eJQG9MHZFljcW3dMyS1qVM3gWL3GBMG1ygILRyis\n95SsiIjqL3OY82la2ObStW7N8fs1tYy4UnZUsPe/cDD1IxD43NZKue9FRZnxmTNQ\n87W266eAwPxARXJ997cgeLvMFQKBgQDQL2mRGM9vEtsouRNDX9GnjUOsmkWzCzcV\nxj+vfTiEi5CnxnO3vfZhEmlrSHtcTzjNxAwXYBVpsSnzQvnf0TquAGIJCcsZ6vFd\nvTMap6oQfwc+bx4PpJRGSRdPGQUeHQnf0NdSOi+YZ+TwRO6j0KooSDDAyFqymlOu\nG+AbwjGEaQKBgGEQWY58EncXdOR1rE3sjkqtqOGnic3rnHmrONBwCJyk03Q+tVlF\nF6Wc/pLONM4BXY3dfNmLt95ryo1dYqcdkd5q0TLvU6TdmaqSazylAUIg4tpVyUvi\nmJ3vm9IkTC1viBHpkuJNL2+7L/W2mJXeVpnWnh8uijcwgwi7+8HxU79ZAoGAWs9D\noioLWa0E8geA8pOaVRbWnTSSEJ5kwde/MeJSQ+bJC5YSJeTz0rYAS+7K+KIJ6h+J\nEq0zye2gmd7uNgYDLaE3IjAmasDD1hrQbuER2q4+T6qSl0o370y0oSkNxWvvQbTM\nJ67/0eAHyhKXcdd0UavjsEP05BFTTRAVuqYDiXkCgYEAkfxxBFwQCmFjzLiXcRSW\nODv2xO3POZX684JG14JCxRG0aXrYAg/WmnRqgutQo2vNtfmZMJPdbC1a20fjcKSh\nTShv0vm1ped9FhfF+9ngj/Xo/2ZgbI8Vbjp5eHRPVM7+hSccohtIeoxkXdymTW5t\nj47v2DfQ4b4yQA93TCaayLo=\n-----END PRIVATE KEY-----\n",
            client_email: "firebase-adminsdk-sptxs@appcha-51d80.iam.gserviceaccount.com",
            client_id: "102909452269121597639",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-sptxs%40appcha-51d80.iam.gserviceaccount.com",
            universe_domain: "googleapis.com"
        })
    })
}

export default async () => {
    const db = getFirestore()
    const lessonsSnap = await db.collection('products').get()
    const lessonsData = lessonsSnap.docs.map(doc => {
        return {
            uuid: doc.id,
            ...doc.data()
        }
    })
    
    return lessonsData
}
