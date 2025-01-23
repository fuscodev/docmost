import { ISpace } from "@/features/space/types/space.types.ts";

export interface IPage {
  id: string;
  slugId: string;
  title: string;
  content: string;
  icon: string;
  coverPhoto: string;
  parentPageId: string;
  creatorId: string;
  spaceId: string;
  workspaceId: string;
  isLocked: boolean;
  isPublic: boolean;
  lastModifiedById: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  position: string;
  hasChildren: boolean;
  space: Partial<ISpace>;
}

export interface IMovePage {
  pageId: string;
  position?: string;
  after?: string;
  before?: string;
  parentPageId?: string;
}

export interface SidebarPagesParams {
  spaceId: string;
  pageId?: string;
  page?: number; // pagination
}

export interface IPageInput {
  pageId: string;
  title: string;
  parentPageId: string;
  icon: string;
  coverPhoto: string;
  position: string;
  isLocked: boolean;
}

export interface IExportPageParams {
  pageId: string;
  format: ExportFormat;
  includeChildren?: boolean;
}

export enum ExportFormat {
  HTML = "html",
  Markdown = "markdown",
}
