import { ReactNode } from "react";
import { Mesh, MeshStandardMaterial } from "three";

export interface MacbookMeshProps {
    children: ReactNode
}

export interface MacbookProps {
    children: ReactNode
}

export interface DreiGLTF {
    nodes: Record<string, Mesh>
    materials: Record<string, MeshStandardMaterial>
}