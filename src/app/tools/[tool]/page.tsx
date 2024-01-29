import { ToolTitle } from '@/components/ToolTitle/ToolTitle';
import { Tools } from '@/components/Tools/Tools';
import { TOOLS_META, TOOLS_TITLE } from '@/constants/tools';
import { ToolType } from '@/types/tools';
import { Breadcrumbs } from '@/ui-kit/Breadcrumbs/Breadcrumbs';
import { camelize } from '@/utils/camelize';
import { Metadata } from 'next';
import styles from './page.module.scss';

interface ToolsProps {
  params: { tool: ToolType };
}

export async function generateMetadata({
  params,
}: ToolsProps): Promise<Metadata> {
  return {
    title: TOOLS_META[camelize(params.tool) as ToolType].title,
    description: TOOLS_META[camelize(params.tool) as ToolType].description,
  };
}

export default function ToolPage({ params }: ToolsProps) {
  const toolType = camelize(params.tool) as ToolType;

  return (
    <div className={styles.root}>
      <Breadcrumbs />
      <ToolTitle>{TOOLS_TITLE[toolType]}</ToolTitle>
      <Tools tool={toolType} />
    </div>
  );
}
